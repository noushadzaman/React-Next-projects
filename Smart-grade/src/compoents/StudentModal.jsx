import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const StudentModal = ({ open, setOpen, student }) => {
    console.log(student)

    return (
        <>
            {
                student !== undefined ? <Modal
                open={open}
                onClose={() => setOpen(false)}
                center
                closeIcon={"X"}
            >
                <div className="border-b border-[#FFFFFF0D]">
                    <span className="uppercase pr-5 text-sm md:text-xl font-semibold md:min-w-[80px] text-left">
                        ID
                    </span>
                    <span className="text-sm md:text-xl font-semibold text-left">
                        Name
                    </span>
                    <span className="p-5 text-sm md:text-xl font-semibold">
                        Scores
                    </span>
                    <span className="p-5 text-sm md:text-xl font-semibold">
                        Percentage
                    </span>
                </div>
                <div
                    key={student?.ID}
                    className="border-b border-[#7ECEB529] flex">
                    <p className="pr-[30px] text-sm md:text-xl">{student?.ID}</p>
                    <div className="pr-[40px] text-sm md:text-xl">
                        <div className="flex space-x-3 items-center">
                            <span className="whitespace-nowrap">{student?.Name}</span>
                        </div>
                    </div>
                    <p className="pr-[65px] text-sm md:text-xl text-center">
                        {student?.Grade}
                    </p>
                    <p className="pl-2 text-sm md:text-xl text-center">
                        {student?.Percentage}%
                    </p>
                </div>
            </Modal> : <Modal
                open={open}
                onClose={() => setOpen(false)}
                center
                closeIcon={"X"}
            >
                <div className="border-b border-[#FFFFFF0D]">
                   <p>No one found</p>
                </div>
            </Modal>
            }
        </>
    );
};

export default StudentModal;