import React, { useEffect } from 'react'

import Prism from 'prismjs'
import 'prismjs/components/prism-javascript' // Language
import 'prismjs/components/prism-bash' // Language
import 'prismjs/themes/prism-okaidia.css' // Theme

const Code = (props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className='code'>
      <pre>
        <code className={`language-${props.language}`}>{props.children}</code>
      </pre>
    </div>
  )
}
export default Code