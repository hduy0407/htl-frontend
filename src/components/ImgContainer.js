
import React from 'react';


export default function ImgContainer() {

    return (
        <div>
            <div class="slider" style={{"--width": "100px", "--height": "50px", "--quantity": "9"}}>
                <div class="list">
                    <div className='item' style={{"--position": 1}}>HTL</div>
                    <div className='item' style={{"--position": 2}}>PICKLEBALL</div>
                    <div className='item' style={{"--position": 3}}>CENTER</div>
                    <div className='item' style={{"--position": 4}}>HTL</div>
                    <div className='item' style={{"--position": 5}}>PICKLEBALL</div>
                    <div className='item' style={{"--position": 6}}>CENTER</div>
                    <div className='item' style={{"--position": 7}}>HTL</div>
                    <div className='item' style={{"--position": 8}}>PICKLEBALL</div>
                    <div className='item' style={{"--position": 9}}>CENTER</div>
                </div>
            </div>

            <div className='slider' style={{"--width": "300px", "--height": "150px", "--quantity": "5"}}> 
                <div className='list'>
                    <div className='image' style={{"--position": 1}}><img alt='img1' src='https://scontent.fqlf1-2.fna.fbcdn.net/v/t39.30808-6/472707379_122129942060552719_816938628642722018_n.jpg?stp=c341.0.1366.1366a_dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=50ad20&_nc_ohc=aNpl6GoEsLAQ7kNvgH1Uj-l&_nc_oc=Adh6cjgNLt-sNgKg_PkON1uHqKOUcJyjy4Vj9P_jGbrnIOwNMwovGeBql1nwZvFaawE&_nc_zt=23&_nc_ht=scontent.fqlf1-2.fna&_nc_gid=ADUWgpJGbcK9zjdRZAq713J&oh=00_AYBhfnMWTf6aUjK4EAFVmR2xSjzJpM2kqXMNJkItpotXdg&oe=67BA42A5'/></div>
                    <div className='image' style={{"--position": 2}}><img alt='img2' src='https://scontent.fqlf1-2.fna.fbcdn.net/v/t39.30808-6/469620878_122124928574552719_5639670139891357577_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nq2iUj8_IN0Q7kNvgFFmvuM&_nc_oc=AdivtnMLz5nTyD-6XnkvK_eg-OqXXuhhs12NlYas8lED3Xahf1cE5_MTbqycxYJzrO4&_nc_zt=23&_nc_ht=scontent.fqlf1-2.fna&_nc_gid=Ax4LWje-wKwwnEtZoVlRDg1&oh=00_AYD-gkx47ucriQG9PhlXBNksKKr_E1Vv-pyzW3Es8nZZsA&oe=67BA2017'/></div>
                    <div className='image' style={{"--position": 3}}><img alt='img3' src='https://scontent.fqlf1-2.fna.fbcdn.net/v/t39.30808-6/471667996_122129940392552719_1061589341616617359_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4gU99uWEPHEQ7kNvgGIPOc4&_nc_oc=AdgplaF81sWQSe29lYHG5ii3JJP0U9cY_OqhDg14U6J3G5p08YK4N4agjIpWdLA2sOM&_nc_zt=23&_nc_ht=scontent.fqlf1-2.fna&_nc_gid=ASeBhPHSm-PinvEv4lXE9Ot&oh=00_AYC2CyGM5tVoM2RCIgLDn0wxInpt3m-vrw0mZH-hBQLpjg&oe=67BA527C'/></div>
                    <div className='image' style={{"--position": 4}}><img alt='img4' src='https://scontent.fqlf1-2.fna.fbcdn.net/v/t39.30808-6/475990676_122135758736552719_2649577234161338046_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=huqSI5bjLnoQ7kNvgFU0zXL&_nc_oc=Adg8teqBbPim3pDPcOoosOyrIhAC7603useACfOq7VmJijvHqR9Icy1QwHuQfbnLlbQ&_nc_zt=23&_nc_ht=scontent.fqlf1-2.fna&_nc_gid=AjITUHBFkQuvqBjDlwfjLQi&oh=00_AYCiQKW6ApTBrZfAmRWm3qQdY8AKDpOtBJwNGGJs5LwsDQ&oe=67BA3E38'/></div>
                    <div className='image' style={{"--position": 5}}><img alt='img5' src='https://scontent.fqlf1-2.fna.fbcdn.net/v/t39.30808-6/472958293_122130441146552719_1512122585907718609_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Vmkj5C0DngUQ7kNvgGmW7os&_nc_oc=AdgJPh3D0opbLo8ZSAKCjOTzS_2f3215lkRshZ2lQjDLrjsQgMkdn5hXJEAVNTHJKrc&_nc_zt=23&_nc_ht=scontent.fqlf1-2.fna&_nc_gid=Ak9SB3Zl3fg6WGoTWMRBrsP&oh=00_AYAbzcdbGOUw7TPxpCv3VSbO2eMlQG_IuIxzgxWhd7Chuw&oe=67BA29A2' /></div>
                </div>
            </div>
        </div>
        
    );
}