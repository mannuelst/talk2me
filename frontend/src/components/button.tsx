interface IButton {
    title: string,
    type: 'button' | 'submit' | 'reset'
}

export default function Button({ title, type }: IButton) {
    return (
        <button className="bg-pri w-full text-white font-medium rounded-md p-2">
            <span typeof={type}>
                {title}
            </span>
        </button>
    )
}