
function button(props) {
    return (
        <div className="w-[47%]">
            <button className="bg-[#002b2d] text-white rounded-md p-4 w-full">{props.number}%</button>
        </div>
    )
}

export default button
