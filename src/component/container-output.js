import copy from 'clipboard-copy';

function ContainerOutput({password}) {

    const changeImage = () =>{
        copy(password);
        const img = document.getElementById('img');
        img.src = 'check-icon.svg';

        setTimeout(() => {
            img.src = 'icon-copy.svg';    
        }, 3000)
    }

    return (
        <div className="content-output">
            <div className="div-output">
                <p className="output" id='pass'>{password}</p>
            </div>
            <div className="div-copy">
                <button className="copy" onClick={() => changeImage()}><img src="icon-copy.svg" id='img' alt="icon copy" width={32} height={32}/></button>
            </div>
        </div>

    );
}

export default ContainerOutput;