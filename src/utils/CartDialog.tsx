import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogActions from "@mui/material/DialogActions"
import Button from "@mui/material/Button"
import { Dispatch, SetStateAction, useState } from "react"
import { Product } from "../stores/store"
import { useUserCart } from "../stores/userCart"
function CartDialog({ prod, open, setOpen }: { prod: Product; open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }) {
    const cart = useUserCart()
    const [value, setValue] = useState(0)
    function handleConfirm() {
        cart.addToCart(prod.id, value)
        setOpen((prev) => !prev)
    }
    return (
        <div>
            <Dialog open={open} onClose={() => setOpen((prev) => !prev)} aria-labelledby={"dsf"}>
                <DialogTitle id={"dialog-title"}>Confirm actions</DialogTitle>
                <DialogContent>
                    <DialogContentText>Choose the quantity and confirm</DialogContentText>
                    <div>
                        <img src={prod?.images[0]} alt="" className="w-30 h-30 rounded-xl" />
                    </div>
                    <input
                        type="number"
                        className=""
                        name=""
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                        placeholder="quantity"
                        id=""
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirm} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default CartDialog
