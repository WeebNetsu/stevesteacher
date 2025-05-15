import { useLocation } from 'preact-iso';
import React from 'react';
import { publicRoutes } from '../../../../../utils/constants/routes';

const MotherboardIntroductionsPage: React.FC = () => {
    const location = useLocation();

    return (
        <div
            style={{
                margin: '2rem',
                textAlign: 'justify',
            }}
        >
            <header>
                <h1>Introduction To The Motherboard</h1>
                <p>
                    I will be taking apart this PC to show you examples of what each part is. Please be warned if you
                    are following along at home, if you have little experience with computer internals, I would
                    recommend following along with an old or broken computer instead - or simply just watching the video
                </p>
            </header>

            <main>
                <h2>Motherboard</h2>
                <p>
                    This is pretty much a large circuit board with all the required slots and connectors for all your
                    computer components, such as the RAM and CPU. It ensures that all the components of the computer can
                    talk to each other, for example the CPU can communicate with the RAM to store data temporarily. It
                    also distributes power to the parts connected to it. Each part or component is also known as a
                    module. You can swap out modules, for example replacing the RAM or storage on the device, this is
                    considered modular design, it has many benefits, such as when a component breaks, you can simply
                    swap it out for a new one, or if you want to upgrade the computer, it would be the same process of
                    just swapping it out for something new. It does come with down sides however, companies such as
                    Apple will ship their Macbooks with a non-modular motherboard design, this can either help shrink
                    the form factor to help the laptop stay small in size, or even improve overall performance, but at
                    the cost of repairability and upgradeability.
                </p>
                <hr />

                <h2>ZIF Socket</h2>
                <p>
                    The Zero Insertion Force or for short, the ZIF socket is where we connect the Central Processing
                    Unit, the CPU for short, to the motherboard. You'll notice on the side it has a little clamp, this
                    is used to insert or remove the CPU without damaging its connectors. The CPU connectors are
                    incredibly fragile, so when building your own PC, make sure to not force it into the socket, as it
                    can bend or damage the connectors. We'll talk more about the CPU and its functions in future videos.
                </p>

                <p>
                    The CPU does most of the work on in a computer, this includes fetching data and instructions from
                    the RAM, decoding, executing and transferring the data back to the RAM.
                </p>
                <hr />

                <h2>DIMM Slots</h2>
                <p>
                    Dual Inline Memory Modules or DIMMs for short are the memory sticks or RAM (Random Access Memory) as
                    most people call it, that you add to your computer. You may also come across SO-DIMMs in the wild,
                    those are usually smaller and are often used in Laptops and other smaller devices.
                </p>
                <hr />

                <h2>SATA Connectors</h2>
                <p>
                    These connectors allow you to plug in your storage devices, such as Solid State Drives (SSDs) and
                    Hard Drives (HDD) into your Motherboard.
                </p>
                <hr />

                <h2>Expansion Slots</h2>
                <p>
                    These slots expand your computer so it can connect more circuits, or in simpler form for the video
                    "Motherboards" to your Motherboard. They are mainly used for Graphics Cards these days.
                </p>
                <hr />

                <h2>ROM</h2>
                <p>
                    ReadOnly Memory is storage that, as the name suggestions, can only be read from but not written to.
                    It holds any data stored in it, even when the power is turned off. It can be found on pretty much
                    all electronic devices, as it keeps what is called the "firmware". Firmware is code that provides
                    low-level control of hardware. You may also know it as the Basic Input Output System (BIOS), EFI or
                    UEFI.
                </p>

                <p>
                    The firmware is what tells your computer to how to start itself. One of the important things it does
                    is the Power On Self Test, or POST, which checks that all the important hardware such as RAM and
                    Hard Drives are working. If you ever messed around with your PC hardware, you may have heard beeps
                    when something is wrong, these beeps usually indicate what is wrong, such as the RAM not being
                    properly placed. The BIOS also provides a menu to configure your computer, such as set which drive
                    should be booted first so it can locate and load the operating system, or giving you the options to
                    overclock your system.
                    {/* <!-- EDITOR NOTE: Film your BIOS screen, or flash a couple of screenshots --> */}
                </p>

                <p>
                    You might be wondering, if the ROM can not be written to, how can we save changes made in the BIOS
                    menu? That is where CMOS, or Complementary Metal Oxide Semiconductor, comes in. All BIOS settings
                    are stored there, that is why when you remove the CMOS Battery, you will reset your BIOS and it will
                    use its default settings again, since the CMOS will lose power if it does not have a battery to keep
                    the data safe.
                </p>

                <p>
                    It is possible to update your firmware, which can lead to benefits of making your system work faster
                    or adding new features to the device. Modern systems use EEPRIM (Erasable Programmable ROM), which
                    can be erased electronically, and a new firmware can be saved to it. Doing this is also known as
                    "flashing the ROM". This process can be very fragile, if it is interrupted or left incomplete during
                    an update, the firmware may become corrupted and the system may not be able to work again. Many
                    modern computer motherboards however does include ways to restore broken firmware.
                </p>
            </main>

            <br />

            <footer>
                <div class="socials-bar">
                    <a
                        class="social-icon discord-icon"
                        onClick={() => {
                            location.route(publicRoutes.home.path);
                        }}
                    >
                        <i class="bi bi-house"></i>
                    </a>

                    <a
                        class="social-icon youtube-icon"
                        onClick={() => {
                            location.route(publicRoutes.home.path);
                        }}
                    >
                        <i class="bi bi-arrow-left"></i>
                    </a>

                    <a class="social-icon youtube-icon" href="#">
                        <i class="bi bi-arrow-right"></i>
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default MotherboardIntroductionsPage;
