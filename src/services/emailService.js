export const sendEmail = async (data) => {
    console.log('Sending email:', data);
    // Implement EmailJS or other service here
    return new Promise((resolve) => setTimeout(resolve, 1000));
};
