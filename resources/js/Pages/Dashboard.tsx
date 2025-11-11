import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';
import SectionCard from "@/Components/SectionCard";
import TitleLarge from "@/Components/TitleLarge";
import TextMedium from "@/Components/TextMedium";

export default function Dashboard() {
    return (
        <AppLayout>
            <Head title="Dashboard" />

            <SectionCard>
                <h2 className="text-2xl font-semibold text-tealbrand">Our Services</h2>
            </SectionCard>

            <SectionCard paleteal>
                <div className={"text-center w-[800px] m-auto gap-[8px]"}>
                    <TitleLarge>خدماتي المقدمة في تجميل الأنف</TitleLarge>
                    <TextMedium>جميع الخدمات التي تخص تجميل الأنف من استشارات، حجز مواعيد، متابعة حالات والتواصل تتم عبر أرقامنا على واتساب مع الطاقم الطبي المختص أو الدكتور أحمد نزار محمد شخصياًً</TextMedium>
                </div>
            </SectionCard>
        </AppLayout>
    );
}
