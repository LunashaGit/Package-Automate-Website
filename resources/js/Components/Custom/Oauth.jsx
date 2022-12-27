export default function Oauth(props) {
    return (
        <div className="flex items-center justify-between mt-4">
            <a
                href={route("google.login")}
                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                {props.name} with Google
            </a>
            <a
                href={route("github.login")}
                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                {props.name} with Github
            </a>
        </div>
    );
}
