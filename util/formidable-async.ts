import formidable from 'formidable';
import IncomingForm from 'formidable/Formidable';
import { IncomingMessage } from 'http';

console.log('Running Parse Async');
export const formidableParseAsync = async (
  req: IncomingMessage,
  form: IncomingForm,
): Promise<{
  fields: formidable.Fields;
  files: formidable.Files;
}> =>
  await new Promise((resolve, reject) =>
    form.parse(req, (e, fields, files) =>
      e
        ? reject(e)
        : resolve({
            fields: fields,
            files: files,
          }),
    ),
  );
