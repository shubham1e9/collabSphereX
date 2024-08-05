"use client";
import Logo from "@/app/_components/Logo";
import { OrganizationSwitcher, useAuth, UserButton, useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import Dashboard from "../page";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";

function Header() {
  
  const { orgId } = useAuth();
  const {user} = useUser();

  useEffect(() => {
    user && saveUserData();
  }, [user])

  //Used to save user data...................................................
  
  const saveUserData = async() => {
    const docId = Date.now().toString();
    try {
      await setDoc(doc(db, 'CSUsers', docId), {
        name:user?.fullName, 
        avatar:user?.imageUrl,
        email:user?.primaryEmailAddress?.emailAddress
      })
    } catch (e) {
      
    }
  }

  
  return (
    <div className="flex items-center justify-between p-3 shadow-md">
      <Logo />
      <OrganizationSwitcher
        afterLeaveOrganizationUrl={"/dashboard"}
        afterCreateOrganizationUrl={"/dashboard"}
      />
      <UserButton />
    </div>
  );
}

export default Header;
