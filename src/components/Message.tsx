interface propTypes {
  text: string,
  //time: Date
}

export default function Message(props: propTypes) {
  return (
    <div className="flex flex-col bg-emerald-800 p-2 rounded-lg w-max">
        <p className="text-sm pr-4">{props.text}</p>
        {/* <span className="text-xs self-end">{props.time.getTime()}</span> */}
    </div>
  )
}
