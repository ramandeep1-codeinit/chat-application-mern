import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext';
import { useConversationContext } from '../context/ConversationContext';

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const {messages, setMessages} = useConversationContext();

    useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			newMessage.shouldShake = true;
			// const sound = new Audio(notificationSound);
			// sound.play();
			setMessages([...messages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
};
export default useListenMessages;