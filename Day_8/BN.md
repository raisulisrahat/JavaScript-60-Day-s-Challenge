### ডম কি?

#### ডকুমেন্ট অবজেক্ট মডেলের বৈশিষ্ট্য:
- **সংজ্ঞা**: ডকুমেন্ট অবজেক্ট মডেল হল ওয়েব ডকুমেন্টের জন্য একটি প্রোগ্রামিং ইন্টারফেস। এটি পৃষ্ঠাটি প্রতিনিধিত্ব করে যাতে প্রোগ্রামগুলি ডকুমেন্টের স্ট্রাকচার, স্টাইল এবং বিষয়বস্তু পরিবর্তন করতে পারে। ধারণটি বুঝা জরুরী যে প্রোগ্রামগুলি JavaScript ব্যবহার করে ওয়েব পৃষ্ঠার বিষয়বস্তু এবং স্ট্রাকচার পরিবর্তন করার জন্য একটি উপায় সরবরাহ করে।
- **ট্রি-এর স্ট্রাকচার**: এটি একটি ট্রি-এর মতো স্ট্রাকচার হিসেবে প্রতিনিধিত্ব করে, যেখানে প্রতিটি নোড একটি অংশ প্রতিনিধিত্ব করে একটি ডকুমেন্টের।
- **উদ্দেশ্য**: ডম বুঝতে সাহায্য করে JavaScript ব্যবহার করে ওয়েব পৃষ্ঠার বিষয়বস্তু এবং স্ট্রাকচার ডাইনামিক ভাবে অ্যাক্সেস, পরিবর্তন এবং আপডেট করা।

### ডম ট্রি

#### ডমের হারারকিয়াল স্ট্রাকচার:
- **নোড এবং এলিমেন্ট**: নোড সংক্রান্ত ধারণা বুঝা যেখানে ডকুমেন্টের এলিমেন্ট, অ্যাট্রিবিউট এবং টেক্সটগুলি ডম ট্রির নোড হিসেবে প্রতিনিধিত্ব করে।
- **প্যারেন্ট-চাইল্ড সম্পর্ক**: এলিমেন্টগুলি একটি প্যারেন্ট-চাইল্ড সম্পর্কে সংগঠিত, একটি ট্রি-এর মতো স্ট্রাকচার গঠন করে।
- **উদাহরণ ভিজ্যুয়ালাইজেশন**: একটি সাধারণ HTML ডকুমেন্টের ডম ট্রির স্ট্রাকচার চিত্রণ বা ভিজ্যুয়ালাইজেশন করা।

### এলিমেন্ট অ্যাক্সেস করা

#### জাভাস্ক্রিপ্ট ব্যবহার করে ডম এলিমেন্ট অ্যাক্সেসের জন্য মৌলিক পদ্ধতি:
- **ডকুমেন্ট অবজেক্ট**: JavaScript-এ ডমের মাধ্যমে ডমে প্রাপ্তির জন্য `document` অবজেক্ট ব্যব