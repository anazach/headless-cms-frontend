import React, { useState } from "react";
import emailjs from "emailjs-com";

const Result = () => {
    return <p className="text-lg text-center mt-1">Thanks for your message!</p>;
};

const ContactForm = () => {
    const [result, setResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_mkolx4j",
                "template_1hv3dvu",
                e.target,
                "user_94c5HzZZkTboFIVsT9Bh8"
            )
            .then(
                (result) => {
                    console.log("Result: ", result.text);
                },
                (error) => {
                    console.log("Error: ", error.text);
                }
            );
        e.target.reset();
        setResult(true);
    };

    setTimeout(() => {
        setResult(false);
    }, 5000);

    return (
        <div className="text-gray-100 px-8 py-12">
            <div
                className="max-w-screen-xl mt-24 m-20 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-8 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
                <div className="flex flex-col justify-between">
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-left mt-8">Contact us</h2>
                    <div className="mt-8 text-center">
                        {/* Image or SVG here */}
                    </div>
                </div>
                <form onSubmit={sendEmail} className="form mx-auto mt-8">
                    <span className="uppercase text-sm text-gray-800 font-bold">Full Name</span>
                    <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text" name="name" />
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-800 font-bold">Email</span>
                        <input className="w-full bg-gray-300 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="e-mail" name="email" />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-800 font-bold">Message</span>
                        <textarea
                            className="w-full h-32 bg-gray-300 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline" name="message"></textarea>
                    </div>
                    <div className="mt-8 flex justify-center">
                        <input type="submit" className="shadow-md py-4 px-20 mt-3 mb-3 rounded-full bg-blue-400 hover:bg-blue-600 hover:text-white focus:shadow-outline transition-all duration-800" value="Send" />
                    </div>
                    <p>{result ? <Result /> : null}</p>
                </form>
            </div>
        </div>
    )
}


export default ContactForm;



