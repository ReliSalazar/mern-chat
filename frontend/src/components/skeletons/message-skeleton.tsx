import React from "react";

interface MessageSkeletonProps {}

const MessageSkeleton: React.FC<MessageSkeletonProps> = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-neutral p-3 flex gap-3 items-center">
        <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
        <div className="flex flex-col gap-1">
          <div className="skeleton h-4 w-40"></div>
          <div className="skeleton h-4 w-40"></div>
        </div>
      </div>
      <div className="bg-neutral p-3 flex gap-3 items-center justify-end">
        <div className="flex flex-col gap-1">
          <div className="skeleton h-4 w-40"></div>
        </div>
        <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
      </div>
    </div>
  );
};

export default MessageSkeleton;
