import React from "react";
import "./tutorial.css"
import {
    StructuredListWrapper,
    StructuredListHead, 
    StructuredListRow,
    StructuredListCell,
    StructuredListBody,
    Tag,
    Pagination
} from "carbon-components-react";
import { HeadingBar } from "../../components";

export const TutorialListPage = () =>{
    //const cardSample = {title:"abc",description:"desciption"}
    return (
        <div className="headingTemplate">
            <HeadingBar title="All Courses"/>  
            <div className="topTemplate">
            <StructuredListWrapper>
                <StructuredListHead>
                    <StructuredListRow head>
                    <StructuredListCell head>Course</StructuredListCell>
                    <StructuredListCell head>Category</StructuredListCell>
                        <StructuredListCell head>About</StructuredListCell>
                        <StructuredListCell head>Author</StructuredListCell>
                    </StructuredListRow>
                    </StructuredListHead>
                    <StructuredListBody>
                    <StructuredListRow>
                        <StructuredListCell noWrap>Row 1</StructuredListCell>
                        <StructuredListCell>
                            <Tag type="red" title="Clear Filter"> Red </Tag>
                        </StructuredListCell>
                        <StructuredListCell>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
                        magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere
                        sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque
                        vulputate nisl a porttitor interdum.
                        </StructuredListCell>
                        <StructuredListCell>
                        Issac
                        </StructuredListCell>
                    </StructuredListRow>
                    <StructuredListRow>
                        <StructuredListCell noWrap>Row 2</StructuredListCell>
                        <StructuredListCell>Row 2</StructuredListCell>
                        <StructuredListCell>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
                        magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere
                        sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque
                        vulputate nisl a porttitor interdum.
                    </StructuredListCell>
                    <StructuredListCell>
                        Issac
                        </StructuredListCell>
                    </StructuredListRow>
                    </StructuredListBody>
                </StructuredListWrapper>
                <Pagination
                    backwardText="Previous page"
                    forwardText="Next page"
                    itemsPerPageText="Items per page:"
                    page={1}
                    pageNumberText="Page Number"
                    pageSize={10}
                    modifiers
                    pageSizes={[
                        10,20
                    ]}
                    totalItems={103}
                    />

            </div>
        </div>
    );
}