export default function Toggle({ props } : {
    props: {
        isOn: boolean;
        setIsOn: (isOn: boolean) => void;
        label?: string;
    }
}) {
    return (
        <div className="flex items-center gap-3">
            <button
                type="button"
                onClick={() => props.setIsOn(!props.isOn)}
                className={`
                    relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer
                    ${props.isOn ? 'bg-[var(--accent)]' : 'bg-gray-200'}
                `}
                role="switch"
                aria-checked={props.isOn}
            >
                <span
                    className={`
                        inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out
                        ${props.isOn ? 'translate-x-6' : 'translate-x-1'}
                    `}
                />
            </button>
            {props.label && (
                <label 
                    onClick={() => props.setIsOn(!props.isOn)}
                    className="text-sm font-medium text-[var(--foreground)] cursor-pointer select-none"
                >
                    {props.label}
                </label>
            )}
        </div>
    )
}