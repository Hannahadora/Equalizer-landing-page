import React, { useState, useEffect } from 'react'

import { useLazyTranslate } from 'react-google-translate'

function TextLang() {

} () => {

    const [text] = useState('test');
    const [language] = useState('zh-CN');

    const [translate, { data, loading }] = useLazyTranslate({
        language
    })

    useEffect(() => {
        if (text) {
            translate(text, language);
        }
    }, [translate, text])

    return (
        <div>{loading ? 'Loading...' : data}</div>
    )
}

export default TextLang