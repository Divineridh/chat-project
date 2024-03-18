import { Image } from '@nextui-org/react'
import Leon from '../assets/leonGlasses.png'
import Message from './Message'
import axios from 'axios'
import { useEffect, useState } from 'react'
import useUserStore from '../zustand/userStore'

export default function MainPanel() {

  const {currentUser} = useUserStore()

  const [data, setData] = useState<Message[]>([])

  const fetchData = async () => {
    axios.get(`https://localhost:7201/api/users/usermessages/${currentUser}`)
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }

  useEffect(() => {
    fetchData()
  }, [currentUser])

  interface Message {
    id: number,
  }

  const renderMessages = data.map(message => (
    <Message key={message.id} text="testing" />
  ))

  return (
    <div className="w-9/12 text-gray-200">
      <div className="flex flex-row gap-4 bg-zinc-800 p-2 items-center pl-4 whites">
        <Image src={Leon} width={45} radius="full" />
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Leon</span>
          <span className="text-xs">press to obtain info about the contact</span>
        </div>
      </div>
      <div className="flex flex-col gap-1 px-80">
        {renderMessages}
      </div>
    </div>
  )
}
