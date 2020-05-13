import React, { useState, useEffect } from 'react';

const Booklist = props => {
    const [bookData, setBookData] = useState(null)
    const result = props.getData?.(props.language);

    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setBookData(response));
    }, [props])
    return (
        <div>
            <ul>
                {
                    bookData == null ? <p>now loading...</p>
                        : bookData.data.items.map((x, index) =>
                            <li key={index}>タイトル：{x.volumeInfo.title}　version：{x.volumeInfo.contentVersion}　紹介文：{x.volumeInfo.description}</li>
                        )
                }


            </ul>
        </div>
    )
}

export default Booklist;
