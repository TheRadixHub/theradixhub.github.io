import { useState } from 'react'
import { Button } from "@/components/ui/button"

export function ButtonOutline() {
    const [count, setCount] = useState(0)

    return (
    <Button variant="outline" onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </Button>
    )
}


export default Btn