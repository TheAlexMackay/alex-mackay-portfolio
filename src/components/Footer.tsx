import Bounded from '../components/Bounded'

export default async function Footer() {
    return <Bounded as="footer">
        <div className="flex sm:flex-row flex-col gap-4">
            <p>© 2025 Alex Mackay</p>
        </div>
    </Bounded>
}