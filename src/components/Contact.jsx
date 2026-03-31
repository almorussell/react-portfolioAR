

const Contact = () => {
  return (
        <section id="contact" className="contact">
        <div className="container">
            <h2>Connect with Me</h2>
            <form>
                <input type="text" placeholder="Drop a name" required/>
                <input type="email" placeholder="To Stay Up-to-Date Leave Your Email" required/>
                <textarea placeholder="Say Hello or Drop a Note" required></textarea>
                <button type="submit" className="btn">Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact
