"use client";
import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import FinancialCapacitySection from "./FinancialCapacitySection";
import FeasibilitySection from "./FeasibilitySection";
import PersonalizedPlanSection from "./PersonalizedPlanSection";
import ActionPlanSection from "./ActionPlanSection";
import CTASection from "./CTASection";
import Footer from "./Footer";
import SectionHeader from "./SectionHeader";

function FinancialPlanningPage() {
  return (
    <main className="flex flex-col items-center bg-white bg-blend-normal">
      <HeroSection />
      <section className="flex flex-col items-center justify-center mt-20 max-md:mt-10 w-full px-3">
        <FeaturesSection />
      </section>

      <section className="flex flex-col items-center justify-center mt-40 max-md:mt-10 w-full px-3">
        <SectionHeader
          badge="Tính năng"
          title="Hiểu về năng lực tài chính của bạn"
          subtitle="Finful thu thập thông tin cơ bản về tình hình tài chính của bạn để đưa ra phân tích và đề xuất phù hợp."
        />
        <FinancialCapacitySection />
      </section>

      <section className="flex flex-col items-center justify-center mt-48 max-md:mt-10 w-full px-3">
        <SectionHeader
          title="Xác định tính khả thi của mục tiêu bạn đặt ra"
          subtitle="Finful cho bạn biết mong muốn mua nhà của bạn có thể thực hiện được hay không"
        />
        <FeasibilitySection />
      </section>

      <section className="flex flex-col items-center justify-center mt-72 max-md:mt-10 w-full px-3">
        <SectionHeader
          title="Cá nhân hoá kế hoạch mua nhà của bạn"
          subtitle="Finful thiết kế một kế hoạch dòng tiền mà ở đó bạn được phép điều chỉnh các con số phù hợp nhất với bản thân"
        />
        <PersonalizedPlanSection />
      </section>

      <section className="flex flex-col items-center justify-center mt-60 max-md:mt-10 w-full px-3">
        <SectionHeader
          title="Xây dựng kế hoạch hành động cho bạn"
          subtitle="Finful thiết kế một kế hoạch hành động với nhiều cột mốc chia nhỏ để bạn dễ hình dung từng bước biến gần hơn tới mục tiêu mua nhà"
        />
        <ActionPlanSection />
      </section>

      <div className="flex self-stretch mt-32 w-full bg-gray-200 px-3 bg-blend-normal min-h-px max-md:mt-10 max-md:max-w-full" />

      <div className="px-3">
        <CTASection />
      </div>
      <Footer/>
    </main>
  );
}

export default FinancialPlanningPage;
