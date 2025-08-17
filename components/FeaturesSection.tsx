import React from "react";
import FeatureCard from "./FeatureCard";
import SectionHeader from "./SectionHeader";

function FeaturesSection() {
  const features = [
    {
      icon: "/protectIcon.png",
      title: "Bảo vệ dữ liệu của bạn",
      description:
        "Finful thu thập dữ liệu cá nhân chỉ để phục vụ tính toán và đưa ra đề xuất phù hợp. Dữ liệu này được lưu trữ nội bộ, không chia sẻ với bất kỳ bên thứ ba nào.",
    },
    {
      icon: "/hoptac.png",
      title: "Đứng về phía bạn",
      description:
        "Các đề xuất sản phẩm tài chính Finful đưa ra là dựa trên sự phù hợp với bạn, không phải dựa trên lợi ích của bất kỳ bên thứ ba nào khác.",
    },
    {
      icon: "/winner.png",
      title: "Dựa trên mục tiêu của bạn",
      description:
        'Finful sẽ giúp bạn chinh phục đa dạng mục tiêu tài chính quan trọng trong cuộc đời, bắt đầu bằng "Chinh phục căn nhà đầu tiên".',
    },
  ];

  return (
    <section className="flex flex-col mt-28 w-full max-w-[1189px] max-md:mt-10 max-md:max-w-full">
      <SectionHeader 
        badge="Dành cho bạn"
        title="Finful đứng về phía bạn, vì quyền lợi của bạn"
        subtitle=""
      />

      <div className="flex flex-wrap gap-2 items-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
