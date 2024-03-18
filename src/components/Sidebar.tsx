import { Button, Input, Image, Listbox, ListboxItem } from '@nextui-org/react'
import CreateIconWhite from '../assets/CreateIconWhite.png'
import FilterIconWhite from '../assets/FilterIconWhite.png'
import useUserStore from '../zustand/userStore'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Chat from './Chat'

export default function Sidebar() {

  interface UserStore {
    currentUser: string
    setCurrentUser: (user: string) => void
  }

  const { currentUser, setCurrentUser }: UserStore = useUserStore()
  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUser = event.target.value
    setCurrentUser(newUser)
  }

  interface Chat {
    id: number,
  }

  const [data, setData] = useState<Chat[]>([])

  const fetchData = async () => {
    axios.get(`https://localhost:7201/api/privateChats/user/${currentUser}`)
      .then(response => {
        setData(response.data)
        console.log(currentUser)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }

  useEffect(() => {
    fetchData()
  }, [currentUser])

  const renderChats = data.map(chat => (
    <ListboxItem key={chat.id}>
      <Chat />
    </ListboxItem>
  ))

  return (
    <div className="w-3/12 h-screen flex flex-col gap-2 p-3 text-gray-200 border-r border-black border-opacity-50">
      <div className="flex flex-row p-4 justify-between items-center">
        <span className="text-lg font-bold">Chats</span>
        <Input size="sm" type="text" variant="bordered" className="w-1/4" name="userInput" onChange={handleUserInput} />
        <div className="flex flex-row">
          <Button isIconOnly={true} size="sm" variant="light"><Image src={CreateIconWhite} /></Button>
          <Button isIconOnly={true} size="sm" variant="light"><Image src={FilterIconWhite} /></Button>
        </div>
      </div>
      <Input size="sm" type="text" placeholder="Search for a chat or start a new one." />
      <Listbox>
        {renderChats}
      </Listbox>
    </div>
  )
}
