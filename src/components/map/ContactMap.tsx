const ContactMap = () => {
    return (
        <>
            <div className="maps-area bg-gray overflow-hidden">
                <div className="google-maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.4286744962347!2d49.85336931535516!3d40.39450697936478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403087dcd9c8c3e1%3A0x4c0a5c5b5c5c5c5c!2zQmFrxLEsIEF6yZlyYmF5Y2Fu!5e0!3m2!1sen!2s!4v1653598669477!5m2!1sen!2s" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </div>
        </>
    );
};

export default ContactMap;