import React, {Component, Fragment} from "react";
import PDFExport from "@progress/kendo-react-pdf/dist/npm/PDFExport";
import {Cv} from "./Cv";

export class App extends Component {
    downloadPdf = () => this.pdf.save();
    printPage = () => window.print();

    render(){
        return (
            <Fragment>
                <nav id="download-menu">
                    <div onClick={this.downloadPdf}>
                        <i className="fas fa-file-pdf"/>
                    </div>
                    <div onClick={this.printPage}>
                        <i className="fas fa-print"/>
                    </div>
                </nav>
                <PDFExport
                    id="app"
                    paperSize="A4"
                    margin={0}
                    fileName="cv-simon-eriksson.pdf"
                    forcePageBreak="#cv-projects"
                    title="cv-simon-eriksson"
                    subject="cv"
                    ref={pdf => this.pdf = pdf}
                ><Cv/></PDFExport>
            </Fragment>
        );
    }
}