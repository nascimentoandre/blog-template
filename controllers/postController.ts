import { Request, Response } from 'express';

export const posts = (req: Request, res: Response) => {
  res.json({
    title: "My title",
    text: "Integer lorem tortor, convallis non diam quis, iaculis pharetra nisl. Aenean vitae tortor libero. Maecenas pretium magna sed turpis congue, non mattis leo eleifend. Vestibulum hendrerit eu purus id cursus. Aliquam maximus orci dapibus rhoncus hendrerit. Sed pretium cursus lorem, vitae euismod neque blandit molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque scelerisque orci eget urna lobortis interdum. Donec scelerisque, felis ornare porta tincidunt, ligula arcu blandit purus, eu porta quam justo ut ipsum. Proin suscipit a ex eu porttitor. Cras maximus maximus varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero diam, lobortis quis nisl sed, interdum consectetur nisl. Vivamus in libero ac metus condimentum pharetra a eu lectus. Nullam feugiat, arcu vel lobortis cursus, augue nulla euismod odio, non ornare nisi arcu et enim.",
    category: "test",
  })
}