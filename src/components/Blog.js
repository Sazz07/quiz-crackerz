import React from 'react';

const Blog = () => {
    return (
        <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24 h-screen text-gray-800">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl text-center mb-5">Frequently Asked Questions</h2>
                <div className="mt-4 mb-8 space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 text-xl focus:outline-none focus-visible:ring-violet-400">1. What are the purpose of using react router?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. <br /> <br />
                            React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications. <br /> <br />
                            React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 text-xl focus:outline-none focus-visible:ring-violet-400">2. How does Context API works?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. <br /> <br />
                            React.createContext() is all we need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 text-xl focus:outline-none focus-visible:ring-violet-400">3. What is useRef?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">The hook useRef() in React returns an object that has a property current that we can access as we do with objects. This property is initialized to the passed argument in the function useRef() . The returned object will persist for the full lifetime of the component. <br /><br />
                            The hook useRef() accepts one argument, which is the value to initialize the property current in the returned object.It is very similar to useState , but it doesn’t cause a component to re-render when changed. One of the most common use cases of the hook useRef in React is to reference a DOM element.Since every DOM element has a property ref , we can use the hook useRef for setting a ref to that element.
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;