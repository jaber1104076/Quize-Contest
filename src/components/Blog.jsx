export const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="p-8 bg-white border rounded shadow-sm mb-5">
                <a
                    href="/"
                    aria-label="Article"
                    title="Jingle Bells"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                    What is the purpose of react router?
                </a>
                <p className="mb-5 text-gray-700">
                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.
                </p>
            </div>
            <div className="p-8 bg-white border rounded shadow-sm mb-5">
                <a
                    href="/"
                    aria-label="Article"
                    title="Happy new Year"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                    How does context Api works?
                </a>
                <p className="mb-5 text-gray-700">
                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page
                </p>
            </div>
            <div className="p-8 bg-white border rounded shadow-sm">
                <a
                    href="/"
                    aria-label="Article"
                    title="Why i love C++"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                    what is useref in react?
                </a>
                <p className="mb-5 text-gray-700">
                    The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.
                </p>
            </div>
        </div>
    );
};