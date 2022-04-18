import React from 'react';

const Blogs = () => {
    return (
        <div className='d-flex justify-content-center flex-wrap'>
            <div style={{ backgroundColor: "lightcyan" }} className="p-5 m-5">
                <h1 className='d-flex justify-content-center'>Authentication এবং Authorization er moddhe পার্থক্য কি?</h1>
                <p>Authentication হলো আমাকে username এবং passwor নিয়ে verify করে প্রবেশ করে দিবে। Authorization হলো আমাকে বিভিন্ন resource use করতে দিবে । আমি যদি একটা ওয়েবসাইট এ লগইন করতে চাই তখন আমাকে আমার username অথবা email এবং পাসওয়ার্ড দিয়ে লগইন করে হবে । আমি যদি কোনো ফেসবুক গ্রুপ এর এডমিন হয় তাহলে আমি একজন মেম্বার কে অ্যাড অথবা রিমুভ করতে পারি। এই যে আমার যে এক্সট্রা ক্ষমতা বা পাওয়ার এই এক্সট্রা পাওয়ার টাকেই authorization বলে। </p>
            </div>
            <div style={{ backgroundColor: "lightcyan" }} className="p-5 m-5">
                <h1 className='d-flex justify-content-center'>তুমি কেনো firebase ব্যাবহার কর? আর কি কি অপশন আছে তোমার কাছে অথেনটিকেশন ইমপ্লিমেন্ট করার জন্য?
                </h1>
                <p>আমি firebase ব্যাবহার করি একটা ওয়েবসাইট এর অথেনটিকেশন সিস্টেম ইমপ্লিমেন্ট এর জন্য । Firbase দিয়ে খুব সহজেই অথেনটিকেশন সিস্টেম ইমপ্লিমেন্ট করা যায় । আমার কাছে আরো ১১টা অথেটিকেশন সিস্টেম ইমপ্লিমেন্ট করার অপশন আছে । নিচে এই গুলোর কিছু নাম এবং শর্ট ডেসক্রিপশন দেয়া হলো :
                    ১. STYTCH
                    ২. ORY
                    ৩. Supabase
                    ৪. Okta
                    ৫. PingIdentity
                    ৬. Keyclock
                    ৭. Frontegg
                    ৮. Authress
                    ৯. AuthO
                    ১০. Amazon Cognito
                    ১১. OneLogin</p>
            </div>
            <div style={{ backgroundColor: "lightcyan" }} className="p-5 m-5">
                <h1 className='d-flex justify-content-center'>Firebase আমাদের অথেনটিকেশন বাদে আর কি কি service দেয় ?</h1>
                <p>Firebase আমাদের অথেনটিকেশন বাদে ৪টা সার্ভিস দেয়। এগুলো হলো :
                    ১. Firebase database
                    Firebase database দিয়ে আমরা ওয়েবসাইট এর জন্য ডাটা সেভ করে রাখতে পারি। সেখান থেকে ডাটা লোড করতে পারি ।
                    ২. Storage
                    Storage দিয়ে আমরা ওয়েবসাইট এর এর ডাটা স্টোর করে রাখতে পারি ।
                    ৩. Hosting
                    Hosting দিয়ে আমরা ওয়েবসাইট টা হোস্ট করতে পারি ।
                    ৪. Machine learning
                    Machine learning দিয়ে আমরা আমাদের অ্যাপ এর প্রবলেম খুব সহজেই সলভ করতে পারি। </p>
            </div>
        </div>
    );
};

export default Blogs;