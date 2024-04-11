import { Card,Typography,Divider,Chip,Box } from '@mui/material';
import { devSkills } from '../../constants/Skills';
import {Person2Rounded} from "@mui/icons-material";

import Skill from '../Skill';
import { useEffect,useState } from 'react';

const About = () => {

    const [javascript ,setJavascript] = useState(0)
    const [html ,setHtml] = useState(0)
    const [css ,setCss] = useState(0)
    const [node ,setNode] = useState(0)
    const [react ,setReact] = useState(0)
    const [git ,setGit] = useState(0)

    useEffect(() => {
        const timer = setInterval(()=>{
            setJavascript((oldprogres) => {
                const diff = Math.random() * 10;
                const dif = Math.floor(diff)
                return Math.min(oldprogres + dif, 82)
            })
            setHtml(oldprogres => {
                const diff = Math.random() * 10;
                const dif = Math.floor(diff)
                return Math.min(oldprogres + dif, 95)
            })
            setCss(oldprogres => {
                const diff = Math.random() * 10;
                const dif = Math.floor(diff)
                return Math.min(oldprogres + dif, 90)
            })
            setNode(oldprogres => {
                const diff = Math.random() * 10;
                const dif = Math.floor(diff)
                return Math.min(oldprogres + dif, 85)
            })
            setReact(oldprogres => {
                const diff = Math.random() * 10;
                const dif = Math.floor(diff)
                return Math.min(oldprogres + dif, 83)
            })
            setGit(oldprogres => {
                const diff = Math.random() * 10;
                const dif = Math.floor(diff)
                return Math.min(oldprogres + dif, 80)
            })
           
        },200)
        return () => {
            clearTimeout(timer)
        }
    },[])

    const {htmlSkill,cssSkill,reactSkill,gitSkill,jsSkill,nodeSkill} = devSkills
    return(
        <Card 
            sx={{
                height: "100vh",
                backgroundColor:"black",
                overflowY: "scroll",
                backgroundImage:{ xs:`url(${require("../../assets/w6.png")})`},
                backgroundSize: "cover",
                backgroundPosition: "center",  
                backgroundRepeat:"no-repeat",
            }}
        >
                       <Divider
                        textAlign="center"
                        sx={{
                            "&::before, &::after": {
                                borderColor: "primary.main",
                            },
                            mb: 3,
                            marginTop:"30px"
                        }}
                    >
                        <Chip
                            icon={<Person2Rounded />}
                            color="primary"
                            label={
                                <Typography
                                    variant="body1"
                                    color="black"
                                    sx={{ textAlign: "center" }}
                                >
                                   درباره من
                                </Typography>
                            }
                            sx={{ p: 3 }}
                        />
                    </Divider>
           <Box 
             sx={{
                marginLeft:{
                    xs:"40px",
                    sm:"250px",
                    md:"150px",
                    lg:"100px"
                },
                width:{
                    xs:"400px",
                    sm:"400px",
                    md:"400px",
                    lg:"800px"
            }}
        }
             >    
          <Skill
            name={htmlSkill.name}
            value={html}
            icon={htmlSkill.icon}
            color={htmlSkill.color}
            />
            <Skill
            name={cssSkill.name}
            value={css}
            icon={cssSkill.icon}
            color={cssSkill.color}
            />
            <Skill
            name={jsSkill.name}
            value={javascript}
            icon={jsSkill.icon}
            color={jsSkill.color}
            />
            <Skill
            name={nodeSkill.name}
            value={node}
            icon={nodeSkill.icon}
            color={nodeSkill.color}
            />
            <Skill
            name={reactSkill.name}
            value={react}
            icon={reactSkill.icon}
            color={reactSkill.color}
            />
            <Skill
            name={gitSkill.name}
            value={git}
            icon={gitSkill.icon}
            color={gitSkill.color}
            />
          </Box>
        </Card>
    )
}

export default About