import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FlipupDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="flipup animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
        font-bold bg-primary text-white border-round m-2 px-5 py-3">
        flipup
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div
                        className="flipup animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
                        font-bold bg-primary text-white border-round m-2 px-5 py-3"
                    >
                        flipup
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
