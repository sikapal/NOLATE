import React from 'react';
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

const Tab = () => {
    return (
        <Tabs aria-label="Tabs with underline" variant="underline" className="w-full space-x-10">
            {/* Profile Tab */}
            <Tabs.Item
                active
                title="Profile"
                icon={HiUserCircle}
                className="w-full mb-4" // Increase bottom gap between tabs
            >
                <div className="w-full">
                    This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes
                    to control the content visibility and styling.
                </div>
            </Tabs.Item>

            {/* Dashboard Tab */}
            <Tabs.Item
                title="Dashboard"
                icon={MdDashboard}
                className="w-full mb-4" // Increase bottom gap between tabs
            >
                <div className="w-full">
                    This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes
                    to control the content visibility and styling.
                </div>
            </Tabs.Item>

            {/* Settings Tab */}
            <Tabs.Item
                title="Settings"
                icon={HiAdjustments}
                className="w-full mb-4" // Increase bottom gap between tabs
            >
                <div className="w-full">
                    This is <span className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</span>.
                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes
                    to control the content visibility and styling.
                </div>
            </Tabs.Item>

            {/* Contacts Tab */}
            <Tabs.Item
                title="Contacts"
                icon={HiClipboardList}
                className="w-full mb-4" // Increase bottom gap between tabs
            >
                <div className="w-full">
                    This is <span className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</span>.
                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes
                    to control the content visibility and styling.
                </div>
            </Tabs.Item>

            {/* Disabled Tab */}
            <Tabs.Item disabled title="Disabled" className="w-full mb-4">
                Disabled content
            </Tabs.Item>
        </Tabs>
    );
};

export default Tab;
