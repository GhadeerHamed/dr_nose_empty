// resources/js/Pages/Dashboard.jsx (Simplified)

import AppLayout from '@/Layouts/AppLayout';
import SectionCard from "@/Components/SectionCard";
import TitleLarge from "@/Components/TitleLarge";
import TextMedium from "@/Components/TextMedium";
import {usePage} from "@inertiajs/react";
import {PageProps} from "@/types";


export default function Dashboard() {
    const { props } = usePage<PageProps>();
    const title = props.locale === 'en' ? 'Dashboard' : "الرئيسية";

    return (
        // Only pass the dynamic 'title' prop
        <AppLayout title={title}>
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

