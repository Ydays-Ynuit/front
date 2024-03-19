import React from 'react';

const Message = ({data}) => {
    console.log(data);
    return (
        <div>
            <div className="flex items-center gap-4 mb-2 overflow-hidden w-[90%]">
                <img className="w-10 h-10 rounded-full" src="https://picsum.photos/100"
                     alt="Rounded avatar"/>
                <div className="text-left font-medium dark:text-white">
                    <div>User n°{data.id}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 truncate text-ellipsis">
                        {data.description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;
