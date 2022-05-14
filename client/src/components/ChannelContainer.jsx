import React from 'react';
import { Channel, useChatContext, MessageTeam} from 'stream-chat-react';

import { ChannelInner, CreateChannel, EditChannel} from './';

const ChannelContainer = ({ isCreating, setIsCreating, isEditing, setIsEditing, createType }) => {
    const { channel } = useChatContext();

    if (isCreating) {
        return (
            <div className='channel__container'>
                <CreateChannel 
                    createType= {createType}
                    setIsCreating = { setIsCreating }
                />
            </div>
        )
    }

    if (isEditing) {
        return (
            <div className='channel_container'>
                <EditChannel 
                    setIsEditing = { setIsEditing }
                />
            </div>
        )
    }

    const EmptyState = () => {
        <div className='channel-empty__container'>
            <p className='channel-empty__first'>This is starting of your chat</p>
            <p className='channel-empty__second'>Send Messages, attachments, links, emojis, videos and so on......</p>
        </div>
    }

    return ( 
        <div className='channel__container'>
            <Channel 
                EmptyStateIndicator={EmptyState}
                Message = {(messageProps, i) => <MessageTeam key={i} {...messageProps} /> }
            >
                <ChannelInner 
                    setIsEditing = { setIsEditing }
                />
            </Channel> 
        </div>
     );
}
 
export default ChannelContainer;