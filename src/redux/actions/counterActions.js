// define counter action constants here
export const INCREAMENT_COUNTER = "INCREAMENT_COUNTER";
export const DECREAMENT_COUNTER = "DECREAMENT_COUNTER";
export const RESET_COUNTER = "RESET_COUNTER";
// define counter action creators here


export const increamentCounter = () =>(
    {
        type: INCREAMENT_COUNTER
    }
)

export const decreamentCounter = () =>(
{
    type: DECREAMENT_COUNTER
}
    )
export const resetCounter = () =>(
    {
        type: RESET_COUNTER
    }
)