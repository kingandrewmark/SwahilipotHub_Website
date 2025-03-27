import FAQs from '@/components/Faq'
import React from "react";
import NextLayout from "@/layouts/NextLayout";
import Breadcrumb from "@/components/Breadcrumb";



// import Attachment from '@/components/landing/Attachment'
export default function DashboardPage() {
    return (
        <NextLayout>
        <Breadcrumb pageName='FAQs'/>
      <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      
        <FAQs />
      
      </div>
      </NextLayout>
    );
};