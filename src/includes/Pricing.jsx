import PricingBody from "../components/PricingBody"
import PricingItem from "../components/PricingItem"
import PricingPackageName from "../components/PricingPackageName"
import PricingRate from "../components/PricingRate"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import WhatsappText from "../components/WhatsappText"
import ReactGA from 'react-ga4';


function Pricing() {

    return (
        <section className="my-10 rounded-xl" id="pricing">
            <div className="inline-flex bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 py-2 px-3 rounded-full justify-center items-center space-x-1">
                <img src="/img/welcome.png" className="h-16 md:h-28" alt="" />
                <img src="/img/welcome-2.png" className="h-16 md:h-28" alt="" />
            </div>
            <div className="py-8 max-w-7xl lg:py-16">
                <div className="mx-auto text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 font-heading text-4xl lg:text-6xl tracking-tight font-extrabold text-gray-800">Pakej Kami</h2>
                </div>
                <div className="space-y-8 grid grid-cols-1 lg:grid-cols-3 md:gap-4 lg:space-y-0">
                    <PricingBody>
                        <PricingPackageName name="Kiosk" classes="bg-cyan-100 text-cyan-600" />
                        <PricingRate rate="RM 119" />
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <PricingItem item="1 Konsep Logo" itemHighlight={true} />
                            <PricingItem item="Siap dalam 3 hari" itemHighlight={true} />
                            <PricingItem item="O Kali Perubahan (Revisions)" itemHighlight={true} />
                            <PricingItem item="Warna dan Tipografi" />
                            <PricingItem item="Logo Bersama Mockup" />
                        </ul>
                        <a target="_blank" href={WhatsappText({
                            text: `Hi, saya berminat dengan pakej Kiosk`
                        })} className="text-white flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 font-medium rounded-lg text-md px-5 py-2.5 justify-center" onClick={ReactGA.event({
                            category: 'Kiosk',
                            action: 'kioskClicked',
                            label: 'kioskPackageClicked'
                        })}>
                            <FontAwesomeIcon icon={faWhatsapp} size="1x"
                            />
                            <span>Whatsapp Kami</span></a>
                    </PricingBody>
                    <PricingBody>
                        <PricingPackageName name="Kedai" classes="bg-orange-100 text-orange-600" />
                        <PricingRate rate="RM 295" />
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <PricingItem item="3 Konsep Logo" itemHighlight={true} />
                            <PricingItem item="Siap dalam 5 hari" itemHighlight={true} />
                            <PricingItem item="3 Kali Perubahan (Revisions)" itemHighlight={true} />
                            <PricingItem item="Warna dan Tipografi" />
                            <PricingItem item="Logo Bersama Mockup" />
                        </ul>
                        <a target="_blank" href={WhatsappText({
                            text: `Hi, saya berminat dengan pakej Kedai`
                        })} className="text-white flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 font-medium rounded-lg text-md px-5 py-2.5 justify-center">
                            <FontAwesomeIcon icon={faWhatsapp} size="1x"
                            />
                            <span>Whatsapp Kami</span></a>
                    </PricingBody>
                    <PricingBody>
                        <PricingPackageName name="Kilang" classes="bg-pink-100 text-pink-600" />
                        <PricingRate rate="RM 490" />
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <PricingItem item="5 Konsep Logo" itemHighlight={true} />
                            <PricingItem item="Siap dalam 7 hari" itemHighlight={true} />
                            <PricingItem item="3 Kali Perubahan (Revisions)" itemHighlight={true} />
                            <PricingItem item="Warna dan Tipografi" />
                            <PricingItem item="Logo Bersama Mockup" />
                            <PricingItem item="Brand Book" />
                            <PricingItem item="Social Media Kit" />
                        </ul>
                        <a target="_blank" href={WhatsappText({
                            text: `Hi, saya berminat dengan pakej Kilang`
                        })} className="text-white flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 font-medium rounded-lg text-md px-5 py-2.5 justify-center">
                            <FontAwesomeIcon icon={faWhatsapp} size="1x"
                            />
                            <span>Whatsapp Kami</span></a>
                    </PricingBody>
                </div>
            </div>
        </section>
    )
}

export default Pricing