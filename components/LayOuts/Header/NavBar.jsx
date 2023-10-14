
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { useState, useEffect, Fragment } from "react";
import DropdownMenu from "./DropdownMenu";
import Link from "next/link";
import { useTheme } from "@/components/context/ThemeContext/ThemeContext";
import Image from 'next/image';


export default function NavBar() {
      const [categories, setCategories] = useState([]); // State to store fetched categories
      const { toggleTheme } = useTheme();
      // Fetch categories from MongoDB when the component mounts
      useEffect(() => {
        // Fetch categories from the API route
        fetch("/api/categories")
          .then((response) => response.json())
          .then((data) => setCategories(data))
          .catch((error) => console.error("Error fetching categories:", error));
      }, []);
      const handleOptionSelect = (selectedOption) => {
        console.log("Selected Option:", selectedOption);
        // You can perform actions when an option is selected
      };

  return (
    <header className="bg-awesome-colors-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href={`/`} className="-m-1.5 p-1.5">
            <Image className="h-8 w-auto" width={30} height={30} src="/favicon.ico" alt="" />
          </Link>
              </div>
              <div>
                  <DropdownMenu options={categories} onSelect={handleOptionSelect} />
              </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        
        <button onClick={toggleTheme}>change Theme</button>
      </nav>

    </header>
  );
}
