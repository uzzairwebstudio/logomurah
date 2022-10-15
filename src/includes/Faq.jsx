import FaqBody from "../components/FaqBody";
import FaqTitle from "../components/FaqTitle";
import FaqContent from "../components/FaqContent";
function Faq() {
    return (

        <div className="py-8 mx-auto max-w-screen-xl">
            <div className="mb-8 lg:mb-16 inline-flex bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 py-2 px-3 rounded-full justify-center items-center space-x-1">
                <img src="/img/question-male.png" className="h-16 md:h-28" alt="" />
                <img src="/img/question-female.png" className="h-16 md:h-28" alt="" />
            </div>
            <h2 className="mb-8 font-heading text-4xl lg:text-6xl tracking-tight font-extrabold text-gray-800">Soalan Lazim</h2>
            <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16  bg-white rounded-xl p-4">
                <div>
                    <FaqBody>
                        <FaqTitle title="Apakah maksud ‘Revision’?" />
                        <FaqContent content="‘Revision‘ ialah permintaan perubahan pada logo. Perubahan hanya boleh dilakukan dengan tujuan mengolah rekabentuk logo yang telah dibuat sahaja. ‘Revision‘ tidak boleh dilakukan untuk membuat logo baharu." />
                    </FaqBody>

                    <FaqBody>
                        <FaqTitle title="Adakah Kilang Logo melakukan servis ‘rebranding’?" />
                        <FaqContent content="Servis Kilang Logo buat masa ini hanya dibuka pada ‘startup’, syarikat dan bisnes baharu sahaja. Proses ‘rebranding’ secara khususnya dilakukan oleh syarikat yang sudah lama tertubuh, oleh kerana itu proses tersebut memerlukan masa yang lebih dan harga yang tidak termasuk dalam pakej Kilang Logo." />
                    </FaqBody>

                    <FaqBody>
                        <FaqTitle title="Boleh tak nak 'online meet' dengan Kilang Logo?" />
                        <FaqContent content="Boleh. Kami sangat mengalu-alukan 'online meeting' sebelum kami 'design' logo anda. Anda hanya perlu maklumkan pada kami di 'Whatsapp'." />
                    </FaqBody>


                </div>
            </div>
        </div>
    )
}

export default Faq;