import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';
const Messenger = () => {
    return (
        <FacebookProvider appId="2369695116574883" chatSupport>
            <CustomChat pageId="223617490841221" minimized={false}/>
        </FacebookProvider>  
    )
}


export default Messenger