import { getLayout } from 'src/layouts/Layout';

const Custom404 = () => (
  <section className="py-12">
    <h3 className="mb-3 text-8xl font-black text-red-500 dark:text-red-500 drop-shadow">
      404
    </h3>

    <article>
      <p>
        The requested page cannot be found. <br />
        <a href="mailto:andy@andy.ws" className="font-bold">
          Contact
        </a>{' '}
        me if this error is erroneous.
      </p>
    </article>
  </section>
);

Custom404.getLayout = getLayout;

export default Custom404;
