import React from "react";
import MainCard from './MainCard.js';
import './Main.css';

function Main() {
    return (
        <div>
            <main>
                <div class="number"><h1>134 Posts</h1></div>
                <div class="total">
                    <div class="details-about">
                        <h1>A Changing World Order</h1>
                        <p>
                            The World is Changing at a feverish pace. Friends, colleagues and
                            everyone engaged in knowledge work are beginning to sesnse
                            this,including...
                        </p>
                        <div class="information">
                            <h3>
                                <span class="detail">musing </span>by
                                anujgosalia
                            </h3>
                            <p>August 2 2 mins Read 102 Views</p>
                            <MainCard />
                        </div>
                    </div>
                    <div class="details-about">
                        <h1>Indian v/s Australia</h1>
                        <p>
                            Think about it- this cricket series was akin to therapy.<br /><br />
                            Laying our childhood trauma up top, working with it slowly and
                            surely over two m...
                        </p>
                        <div class="information">
                            <h3>
                                <span class="detail">thought </span>by
                                anujgosalia
                            </h3>
                            <p>August 2 2 mins Read 102 Views</p>
                            <MainCard />
                        </div>
                    </div>
                    <div class="details-about">
                        <h1>Write To Build</h1>
                        <p>
                            Writing is the first step to create:<br /><br /><br />
                            - Stories<br />
                            - Product<br />
                            - Companies
                        </p>
                        <div class="information">
                            <h3>
                                <span class="detail">thought </span>by
                                anujgosalia
                            </h3>
                            <p>August 2 2 mins Read 102 Views</p>
                            <MainCard />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Main;