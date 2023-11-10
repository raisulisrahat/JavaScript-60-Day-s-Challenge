### Day 9: ডম ন্যাভিগেশন এবং ট্রাভার্সাল
ডম ট্রাভার্সিং: এলিমেন্ট মধ্যে পরিস্থিতির মধ্যে চলতে parentNode, childNodes, querySelector ইত্যাদির মেথড চেষ্টা করুন।
ID, ক্লাস, বা ট্যাগ দিয়ে এলিমেন্ট অ্যাক্সেস: বিশেষভাবে নির্দিষ্ট এলিমেন্ট নির্বাচন করার আলাদা উপায়ে ভিন্ন উপায় বোঝার জন্য।

### ডম ট্রাভার্সিং:

#### 1. `parentNode`:
   - উপরে যেতে `parentNode` প্রপার্টি বুঝতে।
   - উদাহরণ:
     ```javascript
     const childElement = document.getElementById('childId');
     const parentElement = childElement.parentNode;
     ```

#### 2. `childNodes`:
   - শিশু নোড সমূহে একটি সংগ্রহে অ্যাক্সেস করতে `childNodes` প্রপার্টি অনুসন্ধান করুন।
   - উদাহরণ:
     ```javascript
     const parentElement = document.getElementById('parentId');
     const childNodes = parentElement.childNodes;
     ```

#### 3. `querySelector`:
   - CSS সিলেক্টর ব্যবহার করে এলিমেন্ট নির্বাচন করতে `querySelector` মেথড পরিচিত করান।
   - উদাহরণ:
     ```javascript
     const element = document.querySelector('.className');
     ```

#### 4. `querySelectorAll`:
   - `querySelectorAll` ব্যবহার করে সমস্ত মেলানো এলিমেন্ট নির্বাচন করতে।
   - উদাহরণ:
     ```javascript
     const elements = document.querySelectorAll('p');
     ```

### আইডি, ক্লাস, বা ট্যাগ দিয়ে এলিমেন্ট অ্যাক্সেস:

#### 1. আইডি দ্বারা অ্যাক্সেস:
   - এর আইডি দিয়ে একটি এলিমেন্টে অ্যাক্সেস করতে `getElementById` ব্যবহার করা।
   - উদাহরণ:
     ```javascript
     const elementById = document.getElementById('myId');
     ```

#### 2. ক্লাস দ্বারা অ্যাক্সেস:
   - তাদের ক্লাস দ্বারা এলিমেন্ট অ্যাক্সেস করতে `getElementsByClassName` ব্যবহার করা।
   - উদাহরণ:
     ```javascript
     const elementsByClass = document.getElementsByClassName('myClass');
     ```

#### 3. ট্যাগ দ্বারা অ্যাক্সেস:
   - তাদের ট্যাগ নাম দিয়ে এলিমেন্ট অ্যাক্সেস করতে `getElementsByTagName` ব্যবহার করা।
   - উদাহরণ:
     ```javascript
     const elementsByTag = document.getElementsByTagName('p');
     ```

#### 4. কুয়েরি সিলেক্টর দ্বারা অ্যাক্সেস:
   - বিভিন্ন উপায়ে ভিন্ন উপায়ে বিশেষভাবে এলিমেন্ট নির্বাচন করার জন্য `querySelector` ব্যবহার করুন।
   - উদাহরণ:
     ```javascript
     const element = document.querySelector('#myId');
     ```

### অনুশীলন:
- একটি সহজ HTML কাঠামো তৈরি করুন যাতে স্নিগ্ধভাবে এলিমেন্ট থাকে।
- জাভাস্ক্রিপ্ট কোড লেখার জন্য ডম ট্রাভার্স এবং বিভিন্ন পদ্ধতি ব্যব

হার করে ডম এলিমেন্টের সাথে আপনার জ্ঞান প্রয়োজন।
- বিভিন্ন সিলেক্টর এবং ট্রাভার্সাল পদ্ধতিতে প্রয়োগ করুন তাদের আচরণ বোঝার জন্য।

এই ধারাবাহিক প্রকাশনার সাথে, কোডটি চালানোর সময়ে ব্রাউজার কনসোলে আপনার কোডটি চেক করতে `console.log()` ব্যবহার করুন এবং আপনি এই ধারাবাহিকতা জন্য নির্ধারণ করা উপায়ে আগলে যাওয়া হোক।