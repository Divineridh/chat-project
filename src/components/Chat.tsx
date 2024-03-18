import Leon from '../assets/leonGlasses.png'
import { Image } from '@nextui-org/react'

export default function Chat() {
  return (
    <div className="flex flex-row p-2 w-full items-center gap-2 justify-between">
        <div className="flex flex-row gap-3">
            <Image src={Leon} width={50} radius="full" />
            <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-gray-200">Leon</span>
                <span className="text-sm text-gray-400">Visual testing</span>
            </div>
        </div>
        <span className="text-xs self-start text-gray-400 mr-2">14:21</span>
    </div>
  )
}
