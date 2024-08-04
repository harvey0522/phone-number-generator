"use client";
import { useState } from 'react';

const PhoneNumberGenerator = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const generatePhoneNumber = () => {
    // 简单的随机电话号码生成逻辑
    const randomPhoneNumber = '+1' + Math.floor(Math.random() * 9000000000 + 1000000000);
    setPhoneNumber(randomPhoneNumber);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">YouTube 电话号码生成器</h1>
      <button
        onClick={generatePhoneNumber}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        生成电话号码
      </button>
      {phoneNumber && (
        <div className="mt-4">
          <p>生成的电话号码：</p>
          <p className="text-lg font-mono">{phoneNumber}</p>
        </div>
      )}
    </div>
  );
};

export default PhoneNumberGenerator;